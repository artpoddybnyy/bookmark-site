package com.artp.domain;


import com.fasterxml.jackson.annotation.JsonBackReference;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "bookmarks")
public class BookMark {

  @Id @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  private String title;

  private String link;

  @CreationTimestamp
  @Temporal(value = TemporalType.TIMESTAMP)
  private Date dateCreation;

  @JsonBackReference
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "bookmarks_category_id")
  private BookmarksCategory bookmarkCategory;


  private Long categoryId;

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

  public BookmarksCategory getBookmarkCategory() {
    return bookmarkCategory;
  }

  public void setBookmarkCategory(BookmarksCategory bookmarkCategory) {
    this.bookmarkCategory = bookmarkCategory;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getCategoryId() {
    return categoryId;
  }

  public void setCategoryId(Long categoryId) {
    this.categoryId = categoryId;
  }
}
