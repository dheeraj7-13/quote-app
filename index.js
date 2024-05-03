gsap.from("#btn", {delay: 0.5, duration: 2.5, y: 150, ease: "back.out(1.7)", opacity: 0})

const button = document.querySelector('#btn');
const par = document.querySelector('#par');

const quotes = [
    "“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain",
    "“When you change your thoughts, remember to also change your world.” — Norman Vincent Peale",
    "“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.” — Walter Anderson",
    "“It is better to fail in originality than to succeed in imitation.” — Herman Melville",
    "“Don’t let yesterday take up too much of today.” — Will Rogers",
    "“Experience is a hard teacher because she gives the test first, the lesson afterwards.” ― Vernon Sanders Law",
    "“You learn more from failure than from success. Don not let it stop you. Failure builds character.” — Unknown",
    "“Setting goals is the first step in turning the invisible into the visible.” — Tony Robbins",
    "“It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.” – Madeleine Albright",
    "“Opportunities don't happen, you create them.” — Chris Grosser",
    "“It is never too late to be what you might have been.” — George Eliot",
    "“If you can dream it, you can do it.” ―Walt Disney"
]

const photos = ["assets/back.jpg", "assets/two.jpg", "assets/three.jpg", "assets/four.jpg", "assets/five.jpg", "assets/six.jpg", "assets/seven.jpg", "assets/eight.jpg", "assets/nine.jpg", "assets/ten.jpg"];

button.addEventListener('click', () => {
    let randomImages = `url(${photos[Math.floor(Math.random()*photos.length)]})`;
    let randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

    document.body.style.backgroundImage = randomImages;

    par.style.display = "block";
    par.textContent = randomQuotes;
    gsap.from("#par", {duration: 1.1, scale: 1, ease: "power1.inOut", opacity: 0})
})