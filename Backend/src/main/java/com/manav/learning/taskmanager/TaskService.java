package com.manav.learning.taskmanager;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class TaskService {

    List<Task> tasks;

    public void addNewTasks() {
        Task task1 = new Task(1, "complete recharge", LocalDate.now().plusDays(3), false);
        Task task2 = new Task(2, "replace bulbs", LocalDate.now().plusDays(3), false);
        tasks = new ArrayList<>();
        tasks.add(task1);
        tasks.add(task2);
    }

    public List<Task> getAllTasks() {
        return tasks;
    }

    public Task addTask(Task task) {
        if (tasks == null) {
            tasks = new ArrayList<>();
        }
        Task task1 = new Task(tasks.size() + 1, task.getTitle(), task.getDueDate(), task.isCompleted());
        tasks.add(task1);
        return task1;
    }

    public Task updateTask(int id, Task task) {
        if (tasks != null) {
            int index = id - 1;
            tasks.get(index).setTitle(task.getTitle());
            tasks.get(index).setDueDate(task.getDueDate());
            tasks.get(index).setCompleted(task.isCompleted());
            return tasks.get(index);
        }
        return null;
    }

    public String deleteTask(int id) {
        tasks.remove(id - 1);
        return "Task deleted successfully";
    }

}
