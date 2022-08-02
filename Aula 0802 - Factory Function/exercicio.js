function $$(selectedElements) {
    const elements = document.querySelectorAll(selectedElements);

    function hide(){
        elements.forEach(element =>{
            element.style.display = 'none';
        })

        // return $$(selectedElements); Isso é a mesma coisa que o THIS, que é o próprio objeto com seus metodos
        return this;
    }

    function show(){
        elements.forEach(element =>{
            element.style.display = 'initial';
        })

        // return $$(selectedElements);
        return this;
    }

    function on(onEvent, callback){
        elements.forEach(element =>{
            element.addEventListener(onEvent, callback);
        })
        // return $$(selectedElements);
        return this;
    }

    function addClass(className){
        elements.forEach(element => {
            element.classList.add(className)
        });
    
        // return $$(selectedElements);
        return this;
    }

    function removeClass(className){
        elements.forEach(element => {
            element.classList.remove(className)
        });
    
        // return $$(selectedElements);
        return this;
    }


    return {
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass
    }
    
}

const btns = $$('button');

console.log(btns.hide().show());

function handleClick(event){
    console.log(event.target);
    btns.removeClass('active');
}

btns.on('click', handleClick);


btns.addClass('active');


