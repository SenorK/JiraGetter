

//Experimental
function logExp () {
    //value=
    // console.log(this.name+": "+this.responseText.split("total\":")[1].split(",")[0]);   
    // document.getElementsByTagName("p")[0].innerHTML+="<span>"+this.name+": </span><span class='num'>"+this.responseText.split("total\":")[1].split(",")[0]+"</span><br>";
    //Add to table also
    rowid=parseInt(this.name.split(".")[0]);
    //console.log(rowid);
    tds=document.getElementById(rowid).getElementsByTagName("td");
    
    tds[0].innerHTML=rowid;
    tds[1].innerHTML=this.name.split(". ")[1];
    tds[2].innerHTML=this.responseText.split("total\":")[1].split(",")[0];
}; 

function tableMake(e,k){

    for (i=1;i<=e;i++){
        if(i===1){
            document.getElementsByTagName('p')[0].innerHTML+="<table><tbody></tbody></table>";
        }
        tab = document.getElementsByTagName("tbody")[0];
        tab.innerHTML+="<tr id=\""+i+"\"></tr>";
        row=document.getElementById(i);
        for(j=1;j<=k;j++){
            row.innerHTML+="<td id=\""+i+":"+j+"\">"+i+":"+j+"</td>";
        
        }
    }
}



function getCount(name,jql){
    var oReq = new XMLHttpRequest();
    oReq.onload = logExp;
    oReq.name=name;
    oReq.open("get", "https://qualtrics.atlassian.net/rest/api/2/search?jql="+jql+"&maxResults=0", true);
    oReq.send();
}
window.onload=function(){
    tableMake(75,3);
    firstRows={a:3,b:12,c:13,d:22,e:31,f:40,g:49,h:58,i:68};
    styleRows=document.getElementsByTagName("tr");
    styleRows[1].style.display="none";
    styleRows[65].style.display="none";
    for(x in firstRows){
        styleRows[firstRows[x]-1].style.verticalAlign="bottom";
    }
  
    
    
};

//example
//exJQL="status+in+(Open,+%22In+Progress%22,+Reopened,+Resolved,+%22On+Hold%22,+Verify,+%22In+Test%22,+Trashed,+%22In+Staging%22,+Merging,+Releasing)";
//getCount("00. sample",exJQL);

getCount("1. Aggregate - Not Closed","project%20in%20(TS%2C%20CS%2C%20MOB%2C%20REP%2C%20RS%2C%20SI%2C%20TA)%20AND%20issuetype%20%3D%20Bug%20AND%20priority%20in%20(Blocker%2C%20Critical%2C%20Major%2C%20Minor%2C%20Trivial)%20AND%20status%20in%20(Open%2C%20%22In%20Progress%22%2C%20Reopened%2C%20Verify)");
getCount("3. <br>Aggregate - Blocker","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND priority in (Blocker) AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("4. Aggregate - Critical","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND priority in (Critical) AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("5. Aggregate - Major","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND priority in (Major) AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("6. Aggregate - Minor","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND priority in (Minor) AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("7. Aggregate - Trivial","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND priority in (Trivial) AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("8. Aggregate - Open","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND priority in (Blocker, Critical, Major, Minor, Trivial) AND status in (Open)");
getCount("9. Aggregate - Verify/In Progress","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND priority in (Blocker, Critical, Major, Minor, Trivial) AND status in (\"In Progress\", Verify)");
getCount("10. Aggregate - Reopened","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND priority in (Blocker, Critical, Major, Minor, Trivial) AND status in (Reopened)");
getCount("11. Aggregate - Closed<br>","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND priority in (Blocker, Critical, Major, Minor, Trivial) AND status in (Closed)");

getCount("12. <br>Origins - Total Weekly<br>","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND created >= -7d");

getCount("13. <br>360 - Not Closed","project = TS AND issuetype = Bug AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("14. 360 - Open","project = TS AND issuetype = Bug AND status in (Open)");
getCount("15. 360 - Verify/In Progress","project = TS AND issuetype = Bug AND status in (Verify)");
getCount("16. 360 - Reopened","project = TS AND issuetype = Bug AND status in (Reopened)");
getCount("17. 360 - Trivial","project = TS AND issuetype = Bug AND priority = Trivial AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("18. 360 - Minor","project = TS AND issuetype = Bug AND priority = Minor AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("19. 360 - Major","project = TS AND issuetype = Bug AND priority = Major AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("20. 360 - Critical","project = TS AND issuetype = Bug AND priority = Critical AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("21. 360 - Blocker<br>","project = TS AND issuetype = Bug AND priority = Blocker AND status in (Open, \"In Progress\", Reopened, Verify)");

getCount("22. <br>CS - Not Closed","project = CS AND issuetype = Bug AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("23. CS - Open","project = CS AND issuetype = Bug AND status in (Open)");
getCount("24. CS - Verify/In Progress","project = CS AND issuetype = Bug AND status in (Verify)");
getCount("25. CS - Reopened","project = CS AND issuetype = Bug AND status in (Reopened)");
getCount("26. CS - Trivial","project = CS AND issuetype = Bug AND priority = Trivial AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("27. CS - Minor","project = CS AND issuetype = Bug AND priority = Minor AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("28. CS - Major","project = CS AND issuetype = Bug AND priority = Major AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("29. CS - Critical","project = CS AND issuetype = Bug AND priority = Critical AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("30. CS - Blocker<br>","project = CS AND issuetype = Bug AND priority = Blocker AND status in (Open, \"In Progress\", Reopened, Verify)");

getCount("31. <br>MOB - Not Closed","project = MOB AND issuetype = Bug AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("32. MOB - Open","project = MOB AND issuetype = Bug AND status in (Open)");
getCount("33. MOB - Verify/In Progress","project = MOB AND issuetype = Bug AND status in (Verify)");
getCount("34. MOB - Reopened","project = MOB AND issuetype = Bug AND status in (Reopened)");
getCount("35. MOB - Trivial","project = MOB AND issuetype = Bug AND priority = Trivial AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("36. MOB - Minor","project = MOB AND issuetype = Bug AND priority = Minor AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("37. MOB - Major","project = MOB AND issuetype = Bug AND priority = Major AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("38. MOB - Critical","project = MOB AND issuetype = Bug AND priority = Critical AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("39. MOB - Blocker<br>","project = MOB AND issuetype = Bug AND priority = Blocker AND status in (Open, \"In Progress\", Reopened, Verify)");

getCount("40. <br>REP - Not Closed","project = REP AND issuetype = Bug AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("41. REP - Open","project = REP AND issuetype = Bug AND status in (Open)");
getCount("42. REP - Verify/In Progress","project = REP AND issuetype = Bug AND status in (Verify)");
getCount("43. REP - Reopened","project = REP AND issuetype = Bug AND status in (Reopened)");
getCount("44. REP - Trivial","project = REP AND issuetype = Bug AND priority = Trivial AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("45. REP - Minor","project = REP AND issuetype = Bug AND priority = Minor AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("46. REP - Major","project = REP AND issuetype = Bug AND priority = Major AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("47. REP - Critical","project = REP AND issuetype = Bug AND priority = Critical AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("48. REP - Blocker<br>","project = REP AND issuetype = Bug AND priority = Blocker AND status in (Open, \"In Progress\", Reopened, Verify)");

getCount("49. <br>RS - Not Closed","project = RS AND issuetype = Bug AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("50. RS - Open","project = RS AND issuetype = Bug AND status in (Open)");
getCount("51. RS - Verify/In Progress","project = RS AND issuetype = Bug AND status in (Verify)");
getCount("52. RS - Reopened","project = RS AND issuetype = Bug AND status in (Reopened)");
getCount("53. RS - Trivial","project = RS AND issuetype = Bug AND priority = Trivial AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("54. RS - Minor","project = RS AND issuetype = Bug AND priority = Minor AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("55. RS - Major","project = RS AND issuetype = Bug AND priority = Major AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("56. RS - Critical","project = RS AND issuetype = Bug AND priority = Critical AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("57. RS - Blocker<br>","project = RS AND issuetype = Bug AND priority = Blocker AND status in (Open, \"In Progress\", Reopened, Verify)");

getCount("58. <br>SI - Not Closed","project = SI AND issuetype = Bug AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("59. SI - Open","project = SI AND issuetype = Bug AND status in (Open)");
getCount("60. SI - Verify/In Progress","project = SI AND issuetype = Bug AND status in (Verify)");
getCount("61. SI - Reopened","project = SI AND issuetype = Bug AND status in (Reopened)");
getCount("62. SI - Trivial","project = SI AND issuetype = Bug AND priority = Trivial AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("63. SI - Minor","project = SI AND issuetype = Bug AND priority = Minor AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("64. SI - Major","project = SI AND issuetype = Bug AND priority = Major AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("65. SI - Critical","project = SI AND issuetype = Bug AND priority = Critical AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("67. SI - Blocker<br>","project = SI AND issuetype = Bug AND priority = Blocker AND status in (Open, \"In Progress\", Reopened, Verify)");

getCount("68. <br>TA - Not Closed","project = TA AND issuetype = Bug AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("69. TA - Open","project = TA AND issuetype = Bug AND status in (Open)");
getCount("70. TA - Verify/In Progress","project = TA AND issuetype = Bug AND status in (Verify)");
getCount("71. TA - Reopened","project = TA AND issuetype = Bug AND status in (Reopened)");
getCount("71. TA - Trivial","project = TA AND issuetype = Bug AND priority = Trivial AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("72. TA - Minor","project = TA AND issuetype = Bug AND priority = Minor AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("73. TA - Major","project = TA AND issuetype = Bug AND priority = Major AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("74. TA - Critical","project = TA AND issuetype = Bug AND priority = Critical AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("75. TA - Blocker","project = TA AND issuetype = Bug AND priority = Blocker AND status in (Open, \"In Progress\", Reopened, Verify)");
