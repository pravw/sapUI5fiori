sap.ui.define([
   
    "oft/fiori/nov/controller/BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(BaseController,Filter,FilterOperator) {
    "use strict";

    return BaseController.extend("oft.fiori.nov.controller.View1", {
        // onInit() {
        // },

        onItemPress: function(oEvent){

            var listItemSelected = oEvent.getParameter("listItem");
            //  get the address of the element which was selected
            var sPath = listItemSelected.getBindingContextPath();
            // get the second view object and bind this path (element abinding) with second view
            var oview2 = this.getView().getParent().getPages()[1];
            oview2.bindElement(sPath);
            //  when user click on item navigate to next screen we have already used the logic in one function we juct calling that function 
            // which inside the same function.
             this.onShowMe();



        },


        onSearch: function(oEvent){
        var searchStr = oEvent.getParameter("query");
        var oFilter = new Filter("name",FilterOperator.Contains,searchStr );
        var oFilter1 = new Filter("type",FilterOperator.Contains,searchStr );
        var oMainFilter = new Filter({
      filters: [oFilter,oFilter1],and:false
        });
        var aFilter = [oMainFilter];
        var oList = this.getView().byId("idList");
        oList.getBinding("items").filter(aFilter);

        },


        onShowMe: function(){
            //  get object of parent for the both view:container control
            var oApp =  this.getView().getParent();
            //  call the method to navigate to another view by passing id
            oApp.to("idView2");
        }
    });
});