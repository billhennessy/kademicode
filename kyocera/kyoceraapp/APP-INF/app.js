controllerMappings
        .websitePortletController()
        .portletSection('myPerfSummary')
        .templatePath('/theme/apps/perfsummary/myPerfSummary.html')
        .method('populateSummary')
        .enabled(true)
        .build();

function populateSummary(){
    
}  