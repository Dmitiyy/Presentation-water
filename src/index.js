import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

let reveal = new Reveal({
   plugins: [ Markdown ]
})

reveal.toggleOverview();

reveal.initialize({
    controls: true,
    controlsLayout: 'edges',
    controlsBackArrows: 'faded',
    progress: true,
    autoSlide: false,
    loop: false,
    touch: true,
    width: 960,
    height: 700,
    controls: true,
    center: true,
});

