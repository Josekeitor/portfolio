package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.sps.Project;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/projects")
public class ProjectServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String json = convertToJson(generateProjects());
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  private String convertToJson(ArrayList<Project> projects){
    Gson gson = new Gson();
    String json = gson.toJson(projects);
    return json;
  }

  private ArrayList<Project> generateProjects(){
    Project honey = new Project("Honey administrative dashboard", new Date(120, 4, 31), "https://honey-db-project.herokuapp.com");
    Project un = new Project("UN Scorecard React Native App", new Date(121, 0, 20), "https://github.com/CSI3374-SPM/un-scorecard-rn");
    Project cs50AI = new Project("Harvard CS50 AI projects", new Date(120, 4, 1), "https://github.com/me50/Josekeitor/tree/master");

    ArrayList<Project> projects = new ArrayList<>();
    projects.add(honey);
    projects.add(un);
    projects.add(cs50AI);
    
    return projects;
  }

  
}