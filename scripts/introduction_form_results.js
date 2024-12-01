document.addEventListener('DOMContentLoaded', function() {
    const createListItem = (id, value, prefix = '', suffix = '') => {
        const element = document.getElementById(id);
        if (element && value) {
            element.textContent = `${prefix}${value}${suffix}`;
        } else if (element && value) {
            element.textContent = '';
        } 
    };

    createListItem('caption', localStorage.getItem('caption'));
    createListItem('personal', localStorage.getItem('personal'));
    createListItem('professional', localStorage.getItem('professional'));
    createListItem('academic', localStorage.getItem('academic'));
    createListItem('background', localStorage.getItem('background'));
    createListItem('computer', localStorage.getItem('computer'));

    createListItem('code1', localStorage.getItem('code1'), '', ' - ');
    createListItem('course1', localStorage.getItem('course1'), '', ': ');
    createListItem('reason1', localStorage.getItem('reason1'));

    if (localStorage.getItem('course2')) {
        createListItem('code2', localStorage.getItem('code2'), '', ' - ');
        createListItem('course2', localStorage.getItem('course2'), '', ': ');
        createListItem('reason2', localStorage.getItem('reason2'));
    } else {
        document.getElementById('item2').classList.add('hidden-bullet-point');
    }

    if (localStorage.getItem('course3')) {
        createListItem('code3', localStorage.getItem('code3'), '', ' - ');
        createListItem('course3', localStorage.getItem('course3'), '', ': ');
        createListItem('reason3', localStorage.getItem('reason3'));
    } else {
        document.getElementById('item3').classList.add('hidden-bullet-point');
    }

    if (localStorage.getItem('course4')) {
        createListItem('code4', localStorage.getItem('code4'), '', ' - ');
        createListItem('course4', localStorage.getItem('course4'), '', ': ');
        createListItem('reason4', localStorage.getItem('reason4'));
    } else {
        document.getElementById('item4').classList.add('hidden-bullet-point');
    }

    if (localStorage.getItem('course5')) {
        createListItem('code5', localStorage.getItem('code5'), '', ' - ');
        createListItem('course5', localStorage.getItem('course5'), '', ': ');
        createListItem('reason5', localStorage.getItem('reason5'));
    } else {
        document.getElementById('item5').classList.add('hidden-bullet-point');
    }

    createListItem('funny', localStorage.getItem('funny'));
    createListItem('share', localStorage.getItem('share'));

    const imageElement = document.getElementById('image');

    const myImage = 'images/zoe_with_sunflowers.jpg';
    imageElement.src = myImage;
    imageElement.style.display = 'block';

    const userImage = localStorage.getItem('userImage');
    if (userImage) {
        imageElement.src = userImage;
    }

    const form = document.getElementById('introForm');
    form.addEventListener('submit', function(event) {
        const inputs = form.querySelectorAll("input");

        inputs.forEach(input => {
            if (input.type !== "submit" && input.value === input.defaultValue) {
                if (input.value === '') {
                    input.value = '';
                }
            }
        });
    });
});