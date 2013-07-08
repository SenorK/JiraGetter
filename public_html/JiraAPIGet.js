

//Experimental
function logExp () {
     console.log(this.name+": "+this.responseText.split("total\":")[1].split(",")[0]);
     
     document.getElementsByTagName("p")[0].innerHTML+="<span>"+this.name+": </span><span class='num'>"+this.responseText.split("total\":")[1].split(",")[0]+"</span><br>";

}; 

/*
function logBasic () {
     console.log(this.responseText);

}; 
*/

function getCount(name,jql){
    var oReq = new XMLHttpRequest();
    oReq.onload = logExp;
    oReq.name=name;
    oReq.open("get", "https://qualtrics.atlassian.net/rest/api/2/search?jql="+jql+"&maxResults=0", true);
    oReq.send();
}


//example
//exJQL="status+in+(Open,+%22In+Progress%22,+Reopened,+Resolved,+%22On+Hold%22,+Verify,+%22In+Test%22,+Trashed,+%22In+Staging%22,+Merging,+Releasing)";
//getCount("00. sample",exJQL);

getCount("01. Aggregate - Not Closed","project%20in%20(TS%2C%20CS%2C%20MOB%2C%20REP%2C%20RS%2C%20SI%2C%20TA)%20AND%20issuetype%20%3D%20Bug%20AND%20priority%20in%20(Blocker%2C%20Critical%2C%20Major%2C%20Minor%2C%20Trivial)%20AND%20status%20in%20(Open%2C%20%22In%20Progress%22%2C%20Reopened%2C%20Verify)");
getCount("03. Aggregate - Blocker","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND priority in (Blocker) AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("04. Aggregate - Critical","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND priority in (Critical) AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("05. Aggregate - Major","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND priority in (Major) AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("06. Aggregate - Minor","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND priority in (Minor) AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("07. Aggregate - Trivial","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND priority in (Trivial) AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("08. Aggregate - Open","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND priority in (Blocker, Critical, Major, Minor, Trivial) AND status in (Open)");
getCount("09. Aggregate - Verify/In Progress","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND priority in (Blocker, Critical, Major, Minor, Trivial) AND status in (\"In Progress\", Verify)");
getCount("10. Aggregate - Reopened","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND priority in (Blocker, Critical, Major, Minor, Trivial) AND status in (Reopened)");
getCount("11. Aggregate - Closed","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND priority in (Blocker, Critical, Major, Minor, Trivial) AND status in (Closed)");

getCount("<br>12. Origins - Total Weekly","project in (TS, CS, MOB, REP, RS, SI, TA) AND issuetype = Bug AND created >= -7d");

getCount("<br>13. 360 - Not Closed","project = TS AND issuetype = Bug AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("14. 360 - Open","project = TS AND issuetype = Bug AND status in (Open)");
getCount("15. 360 - Verify/In Progress","project = TS AND issuetype = Bug AND status in (Verify)");
getCount("16. 360 - Reopened","project = TS AND issuetype = Bug AND status in (Reopened)");
getCount("17. 360 - Trivial","project = TS AND issuetype = Bug AND priority = Trivial AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("18. 360 - Minor","project = TS AND issuetype = Bug AND priority = Minor AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("19. 360 - Major","project = TS AND issuetype = Bug AND priority = Major AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("20. 360 - Critical","project = TS AND issuetype = Bug AND priority = Critical AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("21. 360 - Blocker","project = TS AND issuetype = Bug AND priority = Blocker AND status in (Open, \"In Progress\", Reopened, Verify)");

getCount("<br>22. CS - Not Closed","project = CS AND issuetype = Bug AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("23. CS - Open","project = CS AND issuetype = Bug AND status in (Open)");
getCount("24. CS - Verify/In Progress","project = CS AND issuetype = Bug AND status in (Verify)");
getCount("25. CS - Reopened","project = CS AND issuetype = Bug AND status in (Reopened)");
getCount("26. CS - Trivial","project = CS AND issuetype = Bug AND priority = Trivial AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("27. CS - Minor","project = CS AND issuetype = Bug AND priority = Minor AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("28. CS - Major","project = CS AND issuetype = Bug AND priority = Major AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("29. CS - Critical","project = CS AND issuetype = Bug AND priority = Critical AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("30. CS - Blocker","project = CS AND issuetype = Bug AND priority = Blocker AND status in (Open, \"In Progress\", Reopened, Verify)");

getCount("<br>31. MOB - Not Closed","project = MOB AND issuetype = Bug AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("32. MOB - Open","project = MOB AND issuetype = Bug AND status in (Open)");
getCount("33. MOB - Verify/In Progress","project = MOB AND issuetype = Bug AND status in (Verify)");
getCount("34. MOB - Reopened","project = MOB AND issuetype = Bug AND status in (Reopened)");
getCount("35. MOB - Trivial","project = MOB AND issuetype = Bug AND priority = Trivial AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("36. MOB - Minor","project = MOB AND issuetype = Bug AND priority = Minor AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("37. MOB - Major","project = MOB AND issuetype = Bug AND priority = Major AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("38. MOB - Critical","project = MOB AND issuetype = Bug AND priority = Critical AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("39. MOB - Blocker","project = MOB AND issuetype = Bug AND priority = Blocker AND status in (Open, \"In Progress\", Reopened, Verify)");

getCount("<br>40. RP - Not Closed","project = RP AND issuetype = Bug AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("41. RP - Open","project = RP AND issuetype = Bug AND status in (Open)");
getCount("42. RP - Verify/In Progress","project = RP AND issuetype = Bug AND status in (Verify)");
getCount("43. RP - Reopened","project = RP AND issuetype = Bug AND status in (Reopened)");
getCount("44. RP - Trivial","project = RP AND issuetype = Bug AND priority = Trivial AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("45. RP - Minor","project = RP AND issuetype = Bug AND priority = Minor AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("46. RP - Major","project = RP AND issuetype = Bug AND priority = Major AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("47. RP - Critical","project = RP AND issuetype = Bug AND priority = Critical AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("48. RP - Blocker","project = RP AND issuetype = Bug AND priority = Blocker AND status in (Open, \"In Progress\", Reopened, Verify)");

getCount("<br>49. RS - Not Closed","project = RS AND issuetype = Bug AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("50. RS - Open","project = RS AND issuetype = Bug AND status in (Open)");
getCount("51. RS - Verify/In Progress","project = RS AND issuetype = Bug AND status in (Verify)");
getCount("52. RS - Reopened","project = RS AND issuetype = Bug AND status in (Reopened)");
getCount("53. RS - Trivial","project = RS AND issuetype = Bug AND priority = Trivial AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("54. RS - Minor","project = RS AND issuetype = Bug AND priority = Minor AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("55. RS - Major","project = RS AND issuetype = Bug AND priority = Major AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("56. RS - Critical","project = RS AND issuetype = Bug AND priority = Critical AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("57. RS - Blocker","project = RS AND issuetype = Bug AND priority = Blocker AND status in (Open, \"In Progress\", Reopened, Verify)");

getCount("<br>58. SI - Not Closed","project = SI AND issuetype = Bug AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("59. SI - Open","project = SI AND issuetype = Bug AND status in (Open)");
getCount("60. SI - Verify/In Progress","project = SI AND issuetype = Bug AND status in (Verify)");
getCount("61. SI - Reopened","project = SI AND issuetype = Bug AND status in (Reopened)");
getCount("62. SI - Trivial","project = SI AND issuetype = Bug AND priority = Trivial AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("63. SI - Minor","project = SI AND issuetype = Bug AND priority = Minor AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("64. SI - Major","project = SI AND issuetype = Bug AND priority = Major AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("65. SI - Critical","project = SI AND issuetype = Bug AND priority = Critical AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("67. SI - Blocker","project = SI AND issuetype = Bug AND priority = Blocker AND status in (Open, \"In Progress\", Reopened, Verify)");

getCount("<br>68. TA - Not Closed","project = TA AND issuetype = Bug AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("69. TA - Open","project = TA AND issuetype = Bug AND status in (Open)");
getCount("70. TA - Verify/In Progress","project = TA AND issuetype = Bug AND status in (Verify)");
getCount("71. TA - Reopened","project = TA AND issuetype = Bug AND status in (Reopened)");
getCount("71. TA - Trivial","project = TA AND issuetype = Bug AND priority = Trivial AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("72. TA - Minor","project = TA AND issuetype = Bug AND priority = Minor AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("73. TA - Major","project = TA AND issuetype = Bug AND priority = Major AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("74. TA - Critical","project = TA AND issuetype = Bug AND priority = Critical AND status in (Open, \"In Progress\", Reopened, Verify)");
getCount("75. TA - Blocker","project = TA AND issuetype = Bug AND priority = Blocker AND status in (Open, \"In Progress\", Reopened, Verify)");
