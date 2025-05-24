document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.switch input').forEach(toggle => {
        toggle.addEventListener('change', function() {
            const card = this.closest('.extension-card');
            card.classList.toggle('inactive', !this.checked);
        });
    });

    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.extension-card').remove();
        });
    });


    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
          
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
                btn.classList.add('inactive');
            });
            this.classList.add('active');
            this.classList.remove('inactive');


            const filter = this.textContent.trim();
            document.querySelectorAll('.extension-card').forEach(card => {
                const isActive = card.querySelector('.switch input').checked;
                
                if (filter === 'All') {
                    card.style.display = 'block';
                } else if (filter === 'Active' && isActive) {
                    card.style.display = 'block';
                } else if (filter === 'Inactive' && !isActive) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
