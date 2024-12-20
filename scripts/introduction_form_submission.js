document.getElementById('intro').addEventListener('submit', function(event) {
    event.preventDefault();

    const caption = document.getElementById('caption').value;
    const personal = document.getElementById('personal').value;
    const professional = document.getElementById('professional').value;
    const academic = document.getElementById('academic').value;
    const background = document.getElementById('background').value;
    const computer = document.getElementById('computer').value;

    const code1 = document.getElementById('code1').value;
    const course1 = document.getElementById('course1').value;
    const reason1 = document.getElementById('reason1').value;

    const code2 = document.getElementById('code2').value;
    const course2 = document.getElementById('course2').value;
    const reason2 = document.getElementById('reason2').value;

    const code3 = document.getElementById('code3').value;
    const course3 = document.getElementById('course3').value;
    const reason3 = document.getElementById('reason3').value;

    const code4 = document.getElementById('code4').value;
    const course4 = document.getElementById('course4').value;
    const reason4 = document.getElementById('reason4').value;

    const code5 = document.getElementById('code5').value;
    const course5 = document.getElementById('course5').value;
    const reason5 = document.getElementById('reason5').value;

    const funny = document.getElementById('funny').value;
    const share = document.getElementById('share').value;

    localStorage.setItem('caption', caption);
    localStorage.setItem('personal', personal);
    localStorage.setItem('professional', professional);
    localStorage.setItem('academic', academic);
    localStorage.setItem('background', background);
    localStorage.setItem('computer', computer);

    localStorage.setItem('code1', code1);
    localStorage.setItem('course1', course1);
    localStorage.setItem('reason1', reason1);

    if (course2) {
        localStorage.setItem('code2', code2);
        localStorage.setItem('course2', course2);
        localStorage.setItem('reason2', reason2);
    } else {
        localStorage.removeItem('code2');
        localStorage.removeItem('course2');
        localStorage.removeItem('reason2');
    }

    if (course3) {
        localStorage.setItem('code3', code3);
        localStorage.setItem('course3', course3);
        localStorage.setItem('reason3', reason3);
    } else {
        localStorage.removeItem('code3');
        localStorage.removeItem('course3');
        localStorage.removeItem('reason3');
    }

    if (course4) {
        localStorage.setItem('code4', code4);
        localStorage.setItem('course4', course4);
        localStorage.setItem('reason4', reason4);
    } else {
        localStorage.removeItem('code4');
        localStorage.removeItem('course4');
        localStorage.removeItem('reason4');
    }

    if (course5) {
        localStorage.setItem('code5', code5);
        localStorage.setItem('course5', course5);
        localStorage.setItem('reason5', reason5);
    } else {
        localStorage.removeItem('code5');
        localStorage.removeItem('course5');
        localStorage.removeItem('reason5');
    }

    localStorage.setItem('funny', funny);
    localStorage.setItem('share', share);

    const image = document.getElementById('image');
    const file = image.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = function() {
            localStorage.setItem('userImage', reader.result);
            window.location.href = 'introduction_form_results.html';
        };
        reader.readAsDataURL(file);
    } else {
        localStorage.removeItem('userImage');
        window.location.href = 'introduction_form_results.html';
    }
});