//GLOBAL VARIABLES
const hiddenWithAnimation = document.querySelectorAll('.hidden--animation');
const hiddenWithoutAnimation = document.querySelectorAll('.hidden--normal');
const hidden_divider = document.querySelectorAll('.hidden-divider');
const projects = document.querySelectorAll('.pi');
const hiddenMenuButtonEl = document.querySelector('.hidden_menu_button');
const xmarkEl = document.querySelector('.xmark');
const barMenuWrapperEl = document.querySelector('.bar_menu_wrapper');
const barMenuItemsEl = document.querySelectorAll('.bar_menu_item');
const logoEl = document.querySelector('.logo');



//OBSERVER FOR THE BOUNCE ANIMATION
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
/*         console.log(entry)
 */        if(entry.isIntersecting){
            entry.target.classList.add('show--animation');
        }
    });
});

//OBSERVER FOR NORMAL SHOW OF ELEMENTS  .. e.g(show project section) 
const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show--normal');
        }
    });
});

//OBSERVER FOR THE DIVIDER IN EACH SECTION
const observer3 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('divider--full-width');
        }
    });
});

// OBSERVER FOR THE PROJECTS
const observer4 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show_project');
        }
    });
});


hiddenWithAnimation.forEach(element => observer.observe(element));  
hiddenWithoutAnimation.forEach(element => observer2.observe(element)); 
hidden_divider.forEach(element => observer3.observe(element));      
projects.forEach(element => observer4.observe(element));

//if page is refresh scroll always start at top of the website
history.scrollRestoration = 'manual'; 


//function to show the hidden menu if bar menu icon is click
const renderHiddenMenu = () => {
    barMenuWrapperEl.classList.toggle("display--yes");
}
hiddenMenuButtonEl.addEventListener("click",renderHiddenMenu);



//function to remove the hidden menu if X icon is click
const removeSecondMenu = () => {
    barMenuWrapperEl.classList.toggle("display--yes");
}
xmarkEl.addEventListener("click",removeSecondMenu);


// If one of the bar menu items was click then automatically close the menu
barMenuItemsEl.forEach(barMenuItemsEl => {
    barMenuItemsEl.addEventListener('click',removeSecondMenu);
});

const refreshPage = () => {
    location.reload();
}

logoEl.addEventListener('click',refreshPage);






