// Defining variables for the play and sound icons
let _i_play = $('#play_button');
let _i_sound = $('#sound_button');

// Defining constants for the video player and buttons
const _video = $('#video-player'),
	videoPlayer = _video.get(0),
	_play = $('#play-video'),
	_mute = $('#play-sound'),
	_list = $('#video-play-list'),
	_mp4 = $('#mp4-source'),
	_webm = $('#webm-source');


// Switching play and sound icons back to default state when the video ends
_video.on('ended', function (e) {
	_i_play.removeClass('fa fa-pause fa-2x');
	_i_play.addClass('fa fa-play fa-2x');
	videoPlayer.muted = false;
	_i_sound.removeClass('a fa-volume-up fa-3x');
	_i_sound.addClass('fa fa-volume-off fa-3x');
});

// Switching between pause and play icons when clicking on pause or play button
_play.on('click', function (e) {
	if (videoPlayer.paused) {
		videoPlayer.play();
		_i_play.removeClass('fa fa-play fa-2x');
		_i_play.addClass('fa fa-pause fa-2x');

	} else {
		videoPlayer.pause();
		_i_play.removeClass('fa fa-pause fa-2x');
		_i_play.addClass('fa fa-play fa-2x');
	}
});

// Switching between sound and mute icons when clicking on sound or mute button
_mute.on('click', function (e) {
	if (videoPlayer.muted) {
		videoPlayer.muted = false;
		_i_sound.removeClass('a fa-volume-up fa-3x');
		_i_sound.addClass('fa fa-volume-off fa-3x');

	} else {
		videoPlayer.muted = true;

		_i_sound.removeClass('fa fa-volume-off fa-3x');
		_i_sound.addClass('fa fa-volume-up fa-3x');
	}
});

// Switching to a diferent video when clicking on any ofthe thumbnails in the playlist
_list.on('click', 'li', function (e) {
	console.log($(this));
	_mp4.attr('src', $(this).data('mp4'));
	_webm.attr('src', $(this).data('webm'));

	/* The load method must be called to reload the video player after the source has changed */
	videoPlayer.load();
	_i_play.removeClass('fa fa-pause fa-2x');
	_i_play.addClass('fa fa-play fa-2x');
	videoPlayer.muted = false;
	_i_sound.removeClass('a fa-volume-up fa-3x');
	_i_sound.addClass('fa fa-volume-off fa-3x');
});
