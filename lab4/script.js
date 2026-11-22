
class Feedback {
    constructor(name, email, album, message) {
        this.name = name;
        this.email = email;
        this.album = album;
        this.message = message;
    }

    printInfo() {
        console.log(`Имя: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Любимый альбом: ${this.album}`);
        console.log(`Сообщение: ${this.message}`);
    }
}

document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const feedback = new Feedback(
        document.getElementById('name').value,
        document.getElementById('email').value,
        document.getElementById('album').value,
        document.getElementById('message').value
    );

    feedback.printInfo();

    document.getElementById('result').textContent = 'Данные отправлены!';
    this.reset();
});
