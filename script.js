function showContent(section){
    //Hide all Content Sections
    var contentSections = document.getElementsByClassName('content-section');
    for(var i = 0; i < contentSections.length; i++){
        contentSections[i].classList.remove('active');
    }
    //Showing the selected Content Section
    var selectedSection = document.getElementById(section);
    selectedSection.classList.add('active');
}