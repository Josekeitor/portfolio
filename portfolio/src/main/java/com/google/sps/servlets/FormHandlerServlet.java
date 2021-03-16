package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the value entered in the form.
    String email = request.getParameter("email");
    String company = request.getParameter("company");
    String textValue = request.getParameter("text-input");

    // Print the value so you can see it in the server logs.
    System.out.println("Email: " + email);
    System.out.println("Company: " + company);
    System.out.println("Text: " + textValue);

    // Write the value to the response so the user can see it.
    response.getWriter().println("Email: " + email);
    response.getWriter().println("Company: " + company);
    response.getWriter().println("Text: " + textValue);
response.sendRedirect("/");
  }
}