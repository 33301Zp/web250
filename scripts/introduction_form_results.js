document.addEventListener('DOMContentLoaded', function() {

    const personal = localStorage.getItem('personal');
    const professional = localStorage.getItem('professional');
    const academic = localStorage.getItem('academic');
    const background = localStorage.getItem('background');
    const computer = localStorage.getItem('computer');

    const code1 = localStorage.getItem('code1');
    const course1 = localStorage.getItem('course1');
    const reason1 = localStorage.getItem('reason1');

    const code2 = localStorage.getItem('code2');
    const course2 = localStorage.getItem('course2');
    const reason2 = localStorage.getItem('reason2');

    const code3 = localStorage.getItem('code3');
    const course3 = localStorage.getItem('course3');
    const reason3 = localStorage.getItem('reason3');

    const code4 = localStorage.getItem('code4');
    const course4 = localStorage.getItem('course4');
    const reason4 = localStorage.getItem('reason4');

    const code5 = localStorage.getItem('code5');
    const course5 = localStorage.getItem('course5');
    const reason5 = localStorage.getItem('reason5');

    const funny = localStorage.getItem('funny');
    const share = localStorage.getItem('share');


    document.getElementById('personal').value = personal || '';
    document.getElementById('professional').value = professional || '';
    document.getElementById('academic').value = academic || '';
    document.getElementById('background').value = background || '';
    document.getElementById('computer').value = computer || '';

    document.getElementById('code1').value = code1 || '';
    document.getElementById('course1').value = course1 || '';
    document.getElementById('reason1').value = reason1 || '';

    if (course2) {
        document.getElementById('code2').value = code2 || '';
        document.getElementById('course2').value = course2 || '';
        document.getElementById('reason2').value = reason2 || '';
    }

    if (course3) {
        document.getElementById('code3').value = code3 || '';
        document.getElementById('course3').value = course3 || '';
        document.getElementById('reason3').value = reason3 || '';
    }

    if (course4) {
        document.getElementById('code4').value = code4 || '';
        document.getElementById('course4').value = course4 || '';
        document.getElementById('reason4').value = reason4 || '';
    }

    if (course5) {
        document.getElementById('code5').value = code5 || '';
        document.getElementById('course5').value = course5 || '';
        document.getElementById('reason5').value = reason5 || '';
    }

    document.getElementById('funny').value = funny || '';
    document.getElementById('share').value = share || '';
});