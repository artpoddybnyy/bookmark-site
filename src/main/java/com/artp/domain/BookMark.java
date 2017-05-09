package com.artp.domain;


import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "bookmarks")
public class BookMark implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  private String title;

  private String link;

  @Column(name = "date_creation")
  @CreationTimestamp
  @Temporal(value = TemporalType.TIMESTAMP)
  private Date dateCreation;


  @ManyToOne
  @JoinColumn(name = "bookmarks_category_id")
  private BookmarksCategory bookmarksCategory;

  public Long getId() {
    return id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getLink() {
    return link;
  }

  public void setLink(String link) {
    this.link = link;
  }

  public Date getDateCreation() {
    return dateCreation;
  }

  public void setDateCreation(Date dateCreation) {
    this.dateCreation = dateCreation;
  }

  public BookmarksCategory getBookmarksCategory() {
    return bookmarksCategory;
  }

  public void setBookmarksCategory(BookmarksCategory bookmarksCategory) {
    this.bookmarksCategory = bookmarksCategory;
  }
}
