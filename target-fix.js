var anchors = document.querySelectorAll('a[target]');
var rel;

for (var i = 0; i < anchors.length; i++) {
	if (anchors[i].hasAttribute('rel')) {
	  rel = anchors[i].getAttribute('rel').replace(/noopener/g, '').replace(/noreferrer/g, '').replace(/^\s+|\s+$/gm, '');
	}
	anchors[i].setAttribute('rel', 'noopener noreferrer' + (rel ? ' ' + rel : ''));
}
