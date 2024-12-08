let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Thêm công việc
document.getElementById('add-task-btn').addEventListener('click', function () {
    const title = document.getElementById('task-title').value.trim();
    const date = document.getElementById('task-date').value;
    const priority = document.getElementById('task-priority').value;

    if (!title || !date) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }

    tasks.push({ title, date, priority });
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Lưu vào localStorage

    document.getElementById('task-title').value = '';
    document.getElementById('task-date').value = '';
    renderTaskTable();
});

// Hiển thị danh sách công việc
function renderTaskTable() {
    const tableBody = document.querySelector('#task-table tbody');
    tableBody.innerHTML = ''; // Xóa dữ liệu cũ
    tasks.forEach((task, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${task.title}</td>
            <td>${task.date}</td>
            <td>${task.priority}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editTask(${index})">Chỉnh Sửa</button>
                <button class="action-btn delete-btn" onclick="deleteTask(${index})">Xóa</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Chỉnh sửa công việc
function editTask(index) {
    const task = tasks[index];
    // Điền thông tin công việc vào bảng chỉnh sửa
    document.getElementById('edit-task-index').value = index;
    document.getElementById('edit-task-title').value = task.title;
    document.getElementById('edit-task-date').value = task.date;
    document.getElementById('edit-task-priority').value = task.priority;

    // Hiển thị bảng chỉnh sửa
    document.querySelector('.edit-form-section').style.display = 'block';
}

// Lưu công việc chỉnh sửa
document.getElementById('save-task-btn').addEventListener('click', function () {
    const index = document.getElementById('edit-task-index').value;
    const title = document.getElementById('edit-task-title').value.trim();
    const date = document.getElementById('edit-task-date').value;
    const priority = document.getElementById('edit-task-priority').value;

    if (!title || !date) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }

    // Cập nhật công việc trong mảng tasks
    tasks[index] = { title, date, priority };

    // Lưu lại vào localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTaskTable();

    // Ẩn bảng chỉnh sửa sau khi lưu
    document.querySelector('.edit-form-section').style.display = 'none';
});

// Xóa công việc
function deleteTask(index) {
    if (confirm('Bạn có chắc chắn muốn xóa công việc này?')) {
        tasks.splice(index, 1);
        // Lưu lại vào localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTaskTable();
    }
}

// Khi trang được tải lại, hiển thị công việc đã lưu trong localStorage
document.addEventListener('DOMContentLoaded', function () {
    renderTaskTable();
});

// Thêm sự kiện tìm kiếm
document.getElementById('search-input').addEventListener('input', function () {
    const searchTerm = this.value.trim().toLowerCase();
    renderTaskTable(searchTerm);
});

// Hiển thị danh sách công việc
function renderTaskTable(searchTerm = '') {
    const tableBody = document.querySelector('#task-table tbody');
    tableBody.innerHTML = ''; // Xóa dữ liệu cũ
    tasks
        .filter(task => task.title.toLowerCase().includes(searchTerm)) // Lọc theo từ khóa tìm kiếm
        .forEach((task, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${task.title}</td>
                <td>${task.date}</td>
                <td>${task.priority}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="editTask(${index})">Chỉnh Sửa</button>
                    <button class="action-btn delete-btn" onclick="deleteTask(${index})">Xóa</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
}

