window.addEventListener('load', function () {

    // кнопки
    var tabs = document.querySelectorAll("a.info-header-tab")

    function EventTabs(clickEvent) {

        // очищаем active tab
        for (i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active")
        }

        // добавляем к нажатому табу active
        let clickedTab = clickEvent.currentTarget
        clickedTab.classList.add("active")
        clickEvent.preventDefault()

        // наш контент
        let tabContent = document.querySelectorAll(".info-tabcontent")

        // устанавливаем tab-content active
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].classList.remove("active")
        }

        // устанавливаем tab active
        let anchor = clickEvent.target,
            activeLink = anchor.getAttribute("href"),
            activeTab = document.querySelector(activeLink)
        activeTab.classList.add("active")
    }

    // event click tabs
    for (i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", EventTabs)
    }
})