package com.artp.web;

import com.artp.domain.BookMark;
import com.artp.domain.BookmarksCategory;
import com.artp.repository.BookMarkRepository;
import com.artp.repository.CategoryRepo;
import com.artp.services.UrlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;


@RestController
public class BookMarkController {

  @Autowired
  private BookMarkRepository bookMarkRepository;
  @Autowired
  private CategoryRepo categoryRepo;
  @Autowired
  private UrlService urlService;

  @RequestMapping(value = "/create-bookmark", method = RequestMethod.POST)
  @ResponseBody
  public ResponseEntity addBookMark(@RequestBody BookMark bookMark) {
    String title = urlService.titleExtractor(bookMark.getLink());
    if (title.equals("404")) {
      return new ResponseEntity(HttpStatus.NOT_FOUND);
    } else
      bookMark.setTitle(title);
    bookMarkRepository.save(bookMark);
    return new ResponseEntity(HttpStatus.OK);
  }

  @RequestMapping(value = "/all-bookmarks", method = RequestMethod.GET)
  public Iterable<BookMark> getBookMarks() {
    return bookMarkRepository.findAll();
  }

  @RequestMapping(value = "/all-bookmarks/{title}", method = RequestMethod.GET)
  public Iterable<BookMark> getAllBookMarksByTitle(@PathVariable("title") String title) {
    return bookMarkRepository.findByTitleContainingIgnoreCase(title);
  }

  @RequestMapping(value = "/one-bookmark/{id}", method = RequestMethod.GET)
  public BookMark getOneBookMark(@PathVariable("id") Long id) {
    return bookMarkRepository.findOne(id);
  }

  @RequestMapping(value = "/delete-bookmarks", method = RequestMethod.POST)
  public void deleteBookMarks(@RequestBody Set<Long> ids) {
    for (Long id : ids) {
      bookMarkRepository.delete(id);
    }
  }

  @RequestMapping(value = "/update-bookmark", method = RequestMethod.PUT)
  public void updateBookMark(@RequestBody BookMark bookMark) {

     bookMark.setBookmarkCategory(categoryRepo.findOne(bookMark.getCategoryId()));

    bookMarkRepository.save(bookMark);
  }


  @RequestMapping(value = "/create-category", method = RequestMethod.POST)
  public void createBookMarksCategory(@RequestBody BookmarksCategory category) {
    categoryRepo.save(category);
  }

  @RequestMapping(value = "/all-category", method = RequestMethod.GET)
  public Iterable<BookmarksCategory> getBookMarksCategory() {
        return categoryRepo.findAll();
  }

}



