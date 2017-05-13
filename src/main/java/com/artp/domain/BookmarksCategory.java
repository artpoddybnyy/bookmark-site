package com.artp.domain;


import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;
@Entity
@Table(name = "bookmarks_category")
public class BookmarksCategory  {


  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
   private Long id;

  private String categoryName;

  @OneToMany(mappedBy = "bookmarkCategory", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  @JsonManagedReference
  private List <BookMark> bookMarks;

  public BookmarksCategory() {

  }

  public BookmarksCategory(int arg) {

  }

  public Long getId() {
    return id;
  }


  public String getCategoryName() {
    return categoryName;
  }

  public void setCategoryName(String categoryName) {
    this.categoryName = categoryName;
  }

  public List<BookMark> getBookMarks() {
    return bookMarks;
  }

  public void setBookMarks(List<BookMark> bookMarks) {
    this.bookMarks = bookMarks;
  }

 }
