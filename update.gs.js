//Google Script\\

//==GLOBAL VARIABLES==\\

//Authentication (Set these)
var username = "";
var password = "";
var encodedThing=Utilities.base64Encode(username + ':' + password);
var options =
    {
      headers: {
        'Authorization': 'Basic ' + encodedThing
      }
    };

//Document
var ss = SpreadsheetApp.openById("0AreprLQL41yVdFNhTUtMX0Q0Q05aaG5PVjNvbFQ3QXc");

//Date
var date = new Date();
var mo = date.getMonth() +1;
var day = date.getDate();
var yr = date.getFullYear();
var dateFormatted = mo + "/" + day + "/" + yr;




//==GLOBAL FUNCTIONS==\\

//API query to Jira
function getCount(jql){
  var url = "https://qualtrics.atlassian.net/rest/api/2/search?jql=" + jql + "&maxResults=0";
  var count = UrlFetchApp.fetch(url,options).getContentText().split("total\":")[1].split(",")[0];
  return count;
}


//Insertion of array into row on specific sheet
function insertRow(jqlArr,sheetNum){
  var sheet = ss.getSheets()[sheetNum];
  var line=[];
  line[0]=dateFormatted;   
  for (i=0;i<jqlArr.length;i+=1){
    if(jqlArr[i][0]!="_"){
      line[i+1]=getCount(jqlArr[i]);
    }
    //Start JQL with underscore to paste in a static value rather than getting a Jira value.
    else{
      line[i+1]=jqlArr[i].split("_")[1];
    }
  }
  sheet.appendRow(line);  
}


//Send Email notification
function notify(name, instructions){
  var docUrl = ss.getUrl();
  var emailAddress = Session.getActiveUser().getEmail();

  GmailApp.sendEmail(emailAddress,
                     'Script \"' + name + '\" has run',
                     'See updated document here: ' + docUrl + "\n\n" + instructions);
}


//Builds JQL arrays for individual projects. Needed for insertRow()
function makeProjectArray(projectID){
  var arrayProject=[
    "project in (" + projectID + ") AND issuetype = Bug AND status in (Open, %22In Progress%22, Reopened, Verify)",
    "project in (" + projectID + ") AND issuetype = Bug AND status in (Open)",
    "project in (" + projectID + ") AND issuetype = Bug AND status in (Verify)",
    "project in (" + projectID + ") AND issuetype = Bug AND status in (Reopened)",
    "project in (" + projectID + ") AND issuetype = Bug AND priority = Trivial AND status in (Open, %22In Progress%22, Reopened, Verify)",
    "project in (" + projectID + ") AND issuetype = Bug AND priority = Minor AND status in (Open, %22In Progress%22, Reopened, Verify)",
    "project in (" + projectID + ") AND issuetype = Bug AND priority = Major AND status in (Open, %22In Progress%22, Reopened, Verify)",
    "project in (" + projectID + ") AND issuetype = Bug AND priority = Critical AND status in (Open, %22In Progress%22, Reopened, Verify)",
    "project in (" + projectID + ") AND issuetype = Bug AND priority = Blocker AND status in (Open, %22In Progress%22, Reopened, Verify)"
  ]
  return arrayProject
}
 



//==TIMED EXECUTION FUNCTIONS==\\

//Updates Aggregate and product specific tabs 
//(Runs every morning)
function updateAggAndProducts(){
  //JQL Array for aggregate of all products
  insertRow(makeProjectArray("TS, CS, MOB, REP, RS, SI, TA"),2);
  insertRow(makeProjectArray("TS"),3);
  insertRow(makeProjectArray("CS"),4);
  insertRow(makeProjectArray("MOB"),5);
  insertRow(makeProjectArray("REP"),6);
  insertRow(makeProjectArray("RS"),7);
  insertRow(makeProjectArray("SI"),8);
  insertRow(makeProjectArray("TA"),9);
           
  notify("Update aggregates and projects","");
}


//Updates the "Origins" tab, only the total number for now (until Odo->jira bug submisison is in place)
//(Runs every Saturday)
function updateOrigins(){
  var arrayOrig=[
    "_","_",
    "project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND created %3E= -7d",
    "project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND status = Closed AND resolved %3E= -7d",
    "project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND status = Closed"
    ]
  insertRow(arrayOrig,1);

  //Make the Bugs query
  var toDateFormatted=yr+"-"+mo+"-"+day;
  
  var fromDate=new Date();
  fromDate.setDate(fromDate.getDate()-7);
  mo = fromDate.getMonth() +1;
  day = fromDate.getDate();
  yr = fromDate.getFullYear();
  
  var fromDateFormatted=yr+"-"+mo+"-"+day;
  
  var bugsUrl = "http://bugs.dev.qualtrics.com/?searchFromDate="+fromDateFormatted+"&searchToDate="+toDateFormatted+"&display%5Bresolutionid%5D=checked&search=search&Page=Assignments&display%5Bsubmit_personid%5D=checked&display%5Bstatusid%5D=checked";
  
  notify("Update Origins","Check the QUni submissions here: "+bugsUrl);
}
