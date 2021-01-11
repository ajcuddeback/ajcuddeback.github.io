barba.init({

    transitions: [
        {
            leave() {
                let done = this.async();
                const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } })
                tl.fromTo('.swipe', 0.75, { x: '-100%' }, { x: '0%', onComplete: done }, '-=0.5')
            },
            enter() {
                let done = this.async();
                window.scrollTo(0, 0)
                const tl = gsap.timeline({ defaults: { ease: 'power2.inOut', onComplete: done } })
                tl.fromTo('.swipe', 1, { x: '0' }, { x: '100%', stagger: 0.25, })
            }
        }
    ]
})