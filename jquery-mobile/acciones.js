// JavaScript 

$(document).ready(function(e){
$('#principal').height($('#page').height());//calcular el alto de la pantalla del dispositivo
		document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('burro','C:\Users\Ulises\Documents\Moviles\Sonidos de Animales\audios\Animales_domesticos\burro.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gato','C:\Users\Ulises\Documents\Moviles\Sonidos de Animales\audios\Animales_domesticos\gato.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gallina','C:\Users\Ulises\Documents\Moviles\Sonidos de Animales\audios\Animales_domesticos\gallina.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('perro','C:\Users\Ulises\Documents\Moviles\Sonidos de Animales\audios\Animales_domesticos\perro.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('cuervo','C:\Users\Ulises\Documents\Moviles\Sonidos de Animales\audios\Animales_domesticos\cuervo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('caballo','C:\Users\Ulises\Documents\Moviles\Sonidos de Animales\audios\Animales_domesticos\caballo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('cocodrilo','C:\Users\Ulises\Documents\Moviles\Sonidos de Animales\audios\Animales_salvajes/cocodrilo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('elefante','C:\Users\Ulises\Documents\Moviles\Sonidos de Animales\audios\Animales_salvajes\elefante.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('jirafa','C:\Users\Ulises\Documents\Moviles\Sonidos de Animales\audios\Animales_salvajes\jirafa.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('leon','C:\Users\Ulises\Documents\Moviles\Sonidos de Animales\audios\Animales_salvajes\leon.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('oso','C:\Users\Ulises\Documents\Moviles\Sonidos de Animales\audios\Animales_salvajes\oso.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('serpiente','C:\Users\Ulises\Documents\Moviles\Sonidos de Animales\audios\Animales_salvajes\serpiente.mp3',function(){},function(e){alert('Error '+e);});
		//reproducir las notas
		$('.nota').bind('touchstart', function(){$(this).addClass('tocada');
		audio.play($(this).attr('id'));});
		$('.nota').bind('touchend',function(){$(this).removeClass('tocada');});
		},false); //deviceready
}); //ready