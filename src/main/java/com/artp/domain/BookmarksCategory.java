package com.artp.domain;


import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "bookmarks_category")
public class BookmarksCategory implements Serializable {


  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column (name = "bookmarks_category_id")
  private int id;

  private String categoryName;

  @OneToMany(targetEntity = BookMark.class, mappedBy = "bookmarksCategory", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  private List <BookMark> bookMarks;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
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
