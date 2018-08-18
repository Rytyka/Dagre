function edges(){



edges=[{from: 0, to: 1},
{from: 1, to: 2},
{from: 2, to: 3},
{from: 3, to: 4},
{from: 1, to: 5},
{from: 5, to: 6},
{from: 6, to: 7},
{from: 1, to: 8},
{from: 8, to: 9},
{from: 9, to: 10},
{from: 10, to: 11},
{from: 11, to: 12},
{from: 11, to: 13},
{from: 11, to: 14},
{from: 11, to: 15},
{from: 11, to: 16},
{from: 11, to: 17},
{from: 11, to: 18},
{from: 11, to: 19},
{from: 11, to: 20},
{from: 11, to: 21},
{from: 11, to: 22},
{from: 11, to: 23},
{from: 12, to: 24},
{from: 13, to: 24},
{from: 14, to: 24},
{from: 15, to: 24},
{from: 16, to: 24},
{from: 17, to: 24},
{from: 18, to: 24},
{from: 19, to: 24},
{from: 20, to: 24},
{from: 21, to: 24},
{from: 22, to: 24},
{from: 23, to: 24},
{from: 25, to: 26},
{from: 25, to: 27},
{from: 25, to: 28},
{from: 25, to: 29},
{from: 25, to: 30},
{from: 30, to: 31},
{from: 31, to: 32},
{from: 32, to: 33},
{from: 32, to: 34},
{from: 32, to: 35},
{from: 32, to: 36},
{from: 32, to: 37},
{from: 38, to: 31 },
{from: 39, to: 0 }];

for(i=40;i<500;i++){
	edges.push({from:i, to:i+400});
}
console.log(edges);
return edges;
}

function nodes(){
nodes=[];
for(i =0;i<500;i++){
	nodes.push({key: i, name:"BDC_"+i, product:["MSRBS"]});
}

for(i=500;i<1000;i++){
	nodes.push({key: i, name:"UP_BUILD_"+i, product:["NR"]});
}
console.log(nodes);

/*nodes=[{key: 0, name: "SDC_BBI" , CL: 0, product: ["MSRBS","NR","VeRC"]},
{key: 1, name: "BDC_BBI" , CL: 2, product: ["MSRBS","NR","VeRC"]},
{key: 2, name: "UP_BUILD_NR" , CL: 2, product: ["NR"]},
{key: 3, name: "RB_BUILD_NR" , CL: 2, product: ["NR"]},
{key: 4, name: "NBC_NR" , CL: 3, product: ["NR"]},
{key: 5, name: "UP_BUILD_VeRC" , CL: 2, product: ["VeRC"]},
{key: 6, name: "RB_BUILD_VeRC" , CL: 2, product: ["VeRC"]},
{key: 7, name: "NBC_VeRC" , CL: 3, product: ["VeRC"]},
{key: 8, name: "UP_BUILD_MSRBS" , CL: 2, product: ["MSRBS"]},
{key: 9, name: "RB_BUILD_MSRBS" , CL: 2, product: ["MSRBS"]},
{key: 10, name: "NBC_MSRBS" , CL: 3, product: ["MSRBS"]},
{key: 11, name: "Wait_For_Test_FOCUS_MSRBS" , CL: 3.5, product: ["MSRBS"]},
{key: 12, name: "NBV_MSRBS_WCDMA_QA_Perforamnce" , CL: 4, product: ["MSRBS"]},
{key: 13, name: "NBV_MSRBS_GSM_QA_Functionality" , CL: 4, product: ["MSRBS"]},
{key: 14, name: "NBV_MSRBS_GSM_QA_Stability" , CL: 4, product: ["MSRBS"]},
{key: 15, name: "NBV_MSRBS_GSM_QA_Configuration" , CL: 4, product: ["MSRBS"]},
{key: 16, name: "NBV_MSRBS_GSM_QA_Upgrade" , CL: 4, product: ["MSRBS"]},
{key: 17, name: "NBV_MSRBS_LTE_QA_Robustness" , CL: 4, product: ["MSRBS"]},
{key: 18, name: "NBV_MSRBS_LTE_QA_Performance" , CL: 4, product: ["MSRBS"]},
{key: 19, name: "NBV_MSRBS_LTE_QA_Capacity" , CL: 4, product: ["MSRBS"]},
{key: 20, name: "NBV_MSRBS_LTE_QA_Functionality" , CL: 4, product: ["MSRBS"]},
{key: 21, name: "NBV_MSRBS_LTE_QA_Stability" , CL: 4, product: ["MSRBS"]},
{key: 22, name: "NBV_MSRBS_LTE_QA_Configuration" , CL: 4, product: ["MSRBS"]},
{key: 23, name: "NBV_MSRBS_LTE_QA_Upgrade" , CL: 4, product: ["MSRBS"]},
{key: 24, name: "Evaluation_MS_CL4" , CL: 4, product: ["MSRBS"]},
{key: 25, name: "SDC_NCMAIN" , CL: 1, product: ["BASEBAND-T"]},
{key: 26, name: "BDC_FRUM_BB_T" , CL: 2, product: ["BASEBAND-T"]},
{key: 27, name: "BDC_AIS_GFF_BB_T", CL: 2, product: ["BASEBAND-T"]},
{key: 28, name: "BDC_ARCHSUPP_PLAB_BB_T", CL: 2, product: ["BASEBAND-T"]},
{key: 29, name: "BDC_ARCHSUPP_SFA_BB_T", CL: 2, product: ["BASEBAND-T"]},
{key: 30, name: "BDC_RBSTCUNC_BB_T", CL: 2, product: ["BASEBAND-T"]},
{key: 31, name: "NBC_BB_T" , CL: 3, product: ["BASEBAND-T"]},
{key: 32, name: "WAIT_FOR_TEST_FOCUS_BB_T", CL: 3, product: ["BASEBAND-T"]},
{key: 33, name: "NBV_CL4_BB_T_QA_ROBUSTNESS", CL: 4, product: ["BASEBAND-T"]},
{key: 34, name: "NBV_CL4_BB_T_QA_PERFORMANCE", CL: 4, product: ["BASEBAND-T"]},
{key: 35, name: "NBV_CL4_BB_T_QA_FUNCTIONALITY", CL: 4, product: ["BASEBAND-T"]},
{key: 36, name: "NBV_CL4_BB_T_QA_CONFIGURE_OAM", CL: 4, product: ["BASEBAND-T"]},
{key: 37, name: "NBV_CL4_BB_T_QA_CONFIGURE_UPGRADE", CL: 4, product: ["BASEBAND-T"]},
{key: 38, name:"UP_BUILD_BB_T", CL:2, product: ["BASEBAND-T"]},
{key: 39, name: "SOURCE_BBI", CL:0, product: ["MSRBS","NR","VeRC"]}];*/
return nodes;
//console.log(nodes_PFV);
//console.log(edges_PFV);
}
