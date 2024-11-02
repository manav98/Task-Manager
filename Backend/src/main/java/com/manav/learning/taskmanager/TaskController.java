package com.manav.learning.taskmanager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TaskController {

    @Autowired
    TaskService service;

    @GetMapping("/all-tasks")
    public List<Task> getAllTasks() {
        return service.getAllTasks();
    }

    @PostMapping("/add-task")
    public Task addTask(@RequestBody Task task) {
        return service.addTask(task);
    }

    @PutMapping("/update-task/{id}")
    public Task updateTask(@PathVariable int id, @RequestBody Task task) {
        return service.updateTask(id, task);
    }

    @GetMapping("/delete-task/{id}")
    public String deleteTask(@PathVariable int id) {
        return service.deleteTask(id);
    }
}
