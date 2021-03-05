package com.google.sps;
import java.util.Date;

public class Project {
    private String name;
    private Date date;
    private String url;

  public Project(String name, Date date, String url){
      this.name = name;
      this.date = date;
      this.url = url;
  }

  public String getName(){
      return this.name;
  }

  public void setName(String name){
      this.name = name;
  }

  public Date getDate(){
      return this.date;
  }

  public void setDate(Date date){
      this.date = date;
  }

  public String getUrl(){
      return this.url;
  }

  public void setUrl(String url){
      this.url = url;
  }


}