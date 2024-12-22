import lozad from '../../../node_modules/lozad/dist/lozad.min.js';

lozad('.lozad', {
    load: function(el) {
        console.log('loading element', el);
    }
});
