chrome.runtime.onMessage.addListener(receivedMessage);

function receivedMessage(message, sender, response) {
    if (message === "1") {
        let data = document.getElementsByClassName("card-body");
        for (let i = 0; i < data.length; i++) {
            data[i].style['color'] = '#121212';
            //data[i].style['background-color'] = '#121212';
        }

        let header = document.getElementsByTagName('h1');
        for (let i = 0; i < header.length; i++) {
            header[i].style['color'] = '#FFFFFF';
        }

        let header2 = document.getElementsByTagName('h5');
        for (let i = 0; i < header.length; i++) {
            header[i].style['color'] = 'rgb(210, 0, 0)';
        }

        let paragraphs = document.getElementsByTagName('p');
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style['color'] = '#FFFFFF';
        }

        let d = document.getElementsByTagName('div');
        for (let i = 0; i < d.length; i++) {
            //d[i].style['color'] = '#FFFFFF';
            d[i].style['background-color'] = '#121212';
        }

        let lists = document.getElementsByTagName('li');
        for (let i = 0; i < lists.length; i++) {
            lists[i].style['color'] = '#FFFFFF';
            //d[i].style['background-color'] = '#121212';
        }

        /*
        const s = document.getElementsByClassName("multiline");
        s[0].style['color'] = "#FF0000";
        s[1].style['color'] = "#FF0000";
        s[2].style['color'] = "#FF0000";
        */

        /*
        for (let i = 0; i < s.length; i++) {
            s[i].style['color'] = '#121212';
            s[i].style['background-color'] = '#121212';
        }
        */

        let sec = document.getElementsByTagName('section');
        for (let i = 0; i < sec.length; i++) {
            sec[i].style['background-color'] = '#191919';
        }

        //let nv = document.getElementsByTagName('nav');
        //nv.style['background-color'] = '#191919';

        let a = document.getElementsByTagName('a');
        for (let i = 0; i < a.length; i++) {
            a[i].style['color'] = '#FFFFFF';
            a[i].style['background-color'] = '#121212';
        }

        let u = document.getElementsByTagName('span');
        for (let i = 0; i < u.length; i++) {
            u[i].style['color'] = 'rgb(210, 0, 0)';
            u[i].style['background-color'] = '#121212';
        }
        /*
        let n = document.getElementsByTagName('multiline');
        for (let i = 0; i < n.length; i++) {
            //sec[i].style['color'] = '#FF0000';
            n[i].style['background-color'] = '#191919';
        }
        */

        //document.body.style.background = "red";

        //const navi = document.getElementsByClassName("fixed-top navbar navbar-light bg-white navbar-expand moodle-has-zindex");
        //navi[0].style['background-color'] = "#191919";

        //document.getElementsByTagName("nav")[0].setAttribute("style","#121212");


    }
    console.log(message);
}






