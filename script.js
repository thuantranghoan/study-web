// Study Web - Simple JavaScript

const greetBtn = document.getElementById('greetBtn');
const message = document.getElementById('message');

const greetings = [
    'Xin chào! Chúc bạn học tốt!',
    'Hello! Happy coding!',
    'Chào bạn! Web development rất thú vị!',
    'Hi! Học code là một hành trình tuyệt vời!',
    'Xin chào! Kiên trì và bạn sẽ thành công!'
];

let clickCount = 0;

greetBtn.addEventListener('click', function() {
    clickCount++;
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    message.textContent = randomGreeting;
    message.style.animation = 'fadeIn 0.5s ease';
    
    // Reset animation
    setTimeout(() => {
        message.style.animation = '';
    }, 500);
});

// Add some interactivity to cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Console log for debugging
console.log('Study Web loaded successfully!');
console.log('Click the button to see greetings!');