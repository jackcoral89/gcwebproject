const audio = document.getElementById('bg_audio');

const changeCssClass = document.getElementById('strips-control');
audio.volume = 1;
// https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
document.getElementById('strips-control')
    .addEventListener('click', function changeAudio() {

        if (audio.volume) {
            $('#bg_audio').animate({
                volume: 0
            }, 2000);
            changeCssClass.className += ' rest_audio';
        } else {
            $('#bg_audio').animate({
                volume: 1
            }, 2000);
            if ($('#strips-control').hasClass('rest_audio')) {
                $('#strips-control').addClass('up_audio');
            }
        }

    });