function changeTheme(event){
    event.stopPropagation();

    let root = document.querySelector(":root");

    let themes = {
        themeOne:{
            themeColor:"rgb(91,91,235)",
            themeColorTransparent:"rgba(91,91,235,0.6)",
            themeColorDarker:"rgb(79, 62, 163)"
        },
        themeTwo:{
            themeColor:"rgb(227, 230, 78)",
            themeColorTransparent:"rgba(227, 230, 78,0.6)",
            themeColorDarker:"rgb(184, 186, 60)"
        },
        themeThree:{
            themeColor:"rgb(115, 255, 112)",
            themeColorTransparent:"rgb(115, 255, 112,0.6)",
            themeColorDarker:"rgb(94, 209, 92)"
        },
        themeFour:{
            themeColor:"rgb(242, 92, 157)",
            themeColorTransparent:"rgb(242, 92, 157,0.6)",
            themeColorDarker:"rgb(191, 71, 123)"
        }
    }

    if(event.target.className.includes("theme-one")){

        root.style.setProperty("--theme-color",themes.themeOne.themeColor);
        root.style.setProperty("--theme-color-transparent",themes.themeOne.themeColorTransparent);
        root.style.setProperty("--theme-color-darker",themes.themeOne.themeColorDarker);

    }else if(event.target.className.includes("theme-two")){

        root.style.setProperty("--theme-color",themes.themeTwo.themeColor);
        root.style.setProperty("--theme-color-transparent",themes.themeTwo.themeColorTransparent);
        root.style.setProperty("--theme-color-darker",themes.themeTwo.themeColorDarker);

    }else if(event.target.className.includes("theme-three")){

        root.style.setProperty("--theme-color",themes.themeThree.themeColor);
        root.style.setProperty("--theme-color-transparent",themes.themeThree.themeColorTransparent);
        root.style.setProperty("--theme-color-darker",themes.themeThree.themeColorDarker);

    }else if(event.target.className.includes("theme-four")){

        root.style.setProperty("--theme-color",themes.themeFour.themeColor);
        root.style.setProperty("--theme-color-transparent",themes.themeFour.themeColorTransparent);
        root.style.setProperty("--theme-color-darker",themes.themeFour.themeColorDarker);

    }

}

export {changeTheme};