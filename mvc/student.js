function onMouseDown (state, args){
    return state + 1
}

function onMouseDown2 (state, args){
    return {count: state.count + 1}
}

function counter3(){
    function onMouseDown(state, args) {
        return {count: state.count + 1}
    }
    return {controller: {onMouseDown}}
}

function counter4(){
    function onMouseDown(state, args){
        return {count: state.count + 1}
    }

    function onKeyDown(state, args){
        return {count: 0}
    }
    return { controller : {onMouseDown, onKeyDown}}
}

function counter5(){
        function onMouseDown(state, args) {
            if (args.shift === true) {
                if (state.count > 0) {
                    return {count: state.count - 1}
                }
                else {
                    return {count: state.count}
                }
            }

            else {
                return {count: state.count + 1}
            }
    }

    function onKeyDown(state, args){
        if (args.key === "ArrowDown"){
            if (state.count > 0) {
                return {count: state.count - 1};
            }
        }
        if (args.key === "ArrowUp"){
            return {count: state.count + 1}
        }
        if (args.key === "0"){
            return {count: 0}
        }
        if (args.key === " "){
            return {count: state.count + 1}
        }
        return {count: state.count}
}
    return { controller : {onMouseDown, onKeyDown}}
}

function counter6() {
    function increment(state) {
        return {count: state.count + 1} }

    function decrement(state) {
        if (state.count > 0) {
            return {count: state.count - 1}
        }
        else{
            return {count: state.count}
        }
    }

    function reset(state) {
        return {count: 0}
    }

    function onMouseDown(state, args) {
        if (args.shift === true) {
            if (state.count > 0) {
                return decrement(state)
        }
            else {
                return {count: state.count}
        }
    }

        else {
            return increment(state)
    }
    }

    function onKeyDown(state, args) {
            if (args.key === "ArrowDown"){
                if (state.count > 0) {
                    return decrement(state)
                }
            }
            if (args.key === "ArrowUp"){
                return increment(state)
            }
            if (args.key === "0"){
                 return reset(state)
            }
            if (args.key === " "){
                return increment(state)
            }
            return {count: state.count}

    }

    const controller = { onMouseDown, onKeyDown };
    const model = { increment, decrement, reset };
    return { controller, model };
}

function counter7(){
    function add(state, amount){
        if (state.count + amount > 0){
            return {count: state.count + amount}
        }
        else{
            return {count: 0}
        }
    }

    function reset(state) {
        return {count: 0}
    }

    function onMouseDown(state, args) {
        if (args.ctrl === true) {
            if (args.shift === true) {
                if (state.count - 5 > 0) {
                    return {count: state.count - 5}
                }
                else {
                    return {count: 0}
                }
            }
            else {
                return {count: state.count + 5}
            }
        }
        else{
            if (args.shift === true) {
                if (state.count > 0) {
                    return {count: state.count - 1}
                }
                else {
                    return {count: state.count}
                }
            }
            else {
                return {count: state.count + 1}
            }
        }
    }

    function onKeyDown(state, args){
        if (args.ctrl === true) {
            if (args.key === "ArrowDown"){
                if (state.count > 0) {
                    return {count: state.count - 5};
                }
            }
            if (args.key === "ArrowUp"){
                return {count: state.count + 5}
            }
            if (args.key === "0"){
                return {count: 0}
            }
            if (args.key === " "){
                return {count: state.count + 5}
            }
            return {count: state.count}
        }
        else {
            if (args.key === "ArrowDown"){
                if (state.count > 0) {
                    return {count: state.count - 1};
                }
            }
            if (args.key === "ArrowUp"){
                return {count: state.count + 1}
            }
            if (args.key === "0"){
                return {count: 0}
            }
            if (args.key === " "){
                return {count: state.count + 1}
            }
            return {count: state.count}
        }
    }

    const controller = { onMouseDown, onKeyDown };
    const model = { add, reset };
    return { controller, model };
}

function chronometer (){
    function timePassed(state,  dt){
        return {elapsedTime: state.elapsedTime + dt}
    }

    function onTimerTick(state, dt){
        return {elapsedTime: state.elapsedTime + dt}
    }

    const controller = {onTimerTick};
    const model = {timePassed};
    return {controller, model}
}

function chronometer2(){
    function timePassed(state,  dt){
        if (state.active) {
            return {elapsedTime: state.elapsedTime + dt, active: state.active}
        }
        else{
            return {elapsedTime: state.elapsedTime, active: state.active}
        }
    }

    function toggle(state) {
        return {elapsedTime: state.elapsedTime, active: !state.active}
    }

    function reset(state){
        return {elapsedTime: state.elapsedTime, active: state.active}
    }

    function onTimerTick(state, dt){
        if (state.active){
            return {elapsedTime: state.elapsedTime + dt, active: state.active}
        }
        else{
            return{elapsedTime: state.elapsedTime, active: state.active}
        }
    }

    function onKeyDown(state, args){
        if (args.key === " "){
            return {elapsedTime: state.elapsedTime, active: !state.active}
        }
        if (args.key === "0"){
            return {elapsedTime: 0, active: state.active}
        }
        return {elapsedTime: state.elapsedTime, active: state.active}
    }

    const controller = {onTimerTick, onKeyDown};
    const model = {timePassed, toggle, reset};
    return {controller, model}
}

function circle(){
    function render(state){
        return [{type: "circle", center:{x: 100, y:100}, radius: 10, color:"red"}]
    }

    const view = {render};
    const model = {};
    const controller = {};
    return {view, model, controller}
}

function circle2(){
    function render(state){
        return [{type: "circle", center:state.position, radius: 10, color:"red"}]
    }

    function moveTo(state, position){
        return {position: position}
    }

    function onMouseDown(state, args){
        return {position: args.position}
    }

    const view = {render};
    const model = {moveTo};
    const controller = {onMouseDown};
    return {view, model, controller}
}

function circle3(){
    function render(state){
        return [{type: "circle", center:state.position, radius: 10, color:"red"}]
    }

    function moveTo(state, position){
        return {position: position}
    }

    function onMouseMove(state, args){
        return {position: args.position}
    }

    const view = {render};
    const model = {moveTo};
    const controller = {onMouseMove};
    return {view, model, controller}
}

function drawing(){

    function render(state){
        if (state.addMode){
            return [{type: "circle", center:state.position, radius: 2, color:"red"}]
        }
        else{
            let x = [];
            for (let i = 0; i < state.dots.length ; i++) {
                x.push({type: "circle", center: state.dots[i], radius: 2, color: "green"})
            }
            x.push({type: "circle", center:state.position, radius: 5, color:"red"});
            return x
        }
    }

    function moveTo(state, position){
        if (state.addMode){
            let dots = state.dots.slice();
            dots.push(position);
            return {position: position, dots: dots, addMode: state.addMode}
        }
        else {
            return {position: position, dots: state.dots, addMode: state.addMode}
        }
    }

    function setAddMode(state, addMode){
        return {position: state.position, dots: state.dots, addMode: addMode}

    }

    function onMouseMove(state, args){
        if (state.addMode){
            return {position: args.position, dots: [args.position], addMode: state.addMode}
        }
        else{
            return {position: args.position, dots: state.dots, addMode: state.addMode}
        }
    }

    function onMouseDown(state, args){
        if(state.addMode){
            return {position: state.position, dots: state.dots, addMode: state.addMode}
        }
        else {
            return {position: state.position, dots: state.dots, addMode: !state.addMode}
        }
    }

    function onMouseUp(state, args){
        if(state.addMode){
            return {position: state.position, dots: state.dots, addMode: !state.addMode}
        }
        else {
            return {position: state.position, dots: state.dots, addMode: state.addMode}
        }
    }

    const view = {render};
    const model = {moveTo, setAddMode};
    const controller = {onMouseMove, onMouseDown, onMouseUp};
    return {view, model, controller}
}

function random(){
    function throwDie(state){
        let foo = (4578 * state.rng ** 2 - 976161 * state.rng + 6156489) % 79729693;
        return {rng: (4578 * state.rng ** 2 - 976161 * state.rng + 6156489) % 79729693, dieValue: foo % 6 + 1 };
    }


    function onKeyDown(state, args){
        if (args.key === " "){
            return throwDie(state);
        }
    }

    function render(state){
        return [{type: "text", position: {x: 50, y: 50}, string: state.dieValue.toString() }];
    }

    const view = {render};
    const model = {throwDie};
    const controller = {onKeyDown};
    return {view, model, controller};
}

function random2(){
    function nextRandom(n) {
        return (4578 * n ** 2 - 976161 * n + 6156489) % 79729693;
    }
    function throwDie(state) {
        const value = nextRandom(state.rng);
        return [value % 6 + 1, { ...state, rng: value }];
    }
    function generateGrade(state) {
        const [a, state2] = throwDie(state);
        const [b, state3] = throwDie(state2);
        const [c, state4] = throwDie(state3);
        return { ...state4, grade: a + b + c };
    }


    function onKeyDown(state, args) {
        return model.generateGrade(state);
    }

    function render(state) {
        return [{ type: 'text', position: { x: 50, y: 50 }, string: state.grade.toString() }];
    }

    const view = {render};
    const model = {nextRandom, throwDie, generateGrade};
    const controller = {onKeyDown};
    return {view, model, controller};
}