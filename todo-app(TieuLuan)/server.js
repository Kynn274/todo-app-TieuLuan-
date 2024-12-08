const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Kết nối đến MongoDB
mongoose.connect('mongodb://localhost:27017/todolist', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Định nghĩa schema và model cho công việc
const taskSchema = new mongoose.Schema({
    title: String,
    date: String,
    priority: String
});
const Task = mongoose.model('Task', taskSchema);

// Middleware để phục vụ các file tĩnh (HTML, CSS, JS)
app.use(express.static('public'));
app.use(express.json()); // Middleware để xử lý dữ liệu JSON từ client

// Route để lấy danh sách công việc
app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Route để thêm công việc
app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
});

// Route để xóa công việc
app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(204).end();
});

// Route để sửa công việc
app.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedTask);
});

// Lắng nghe trên cổng 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
