package com.artp.web;

import com.artp.domain.BookMark;
import com.artp.repository.BookMarkRepository;
import com.artp.services.UrlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;


@RestController
public class StationController {

  @Autowired
  private BookMarkRepository bookMarkRepository;
  @Autowired
  private UrlService urlService;

  @RequestMapping(value = "/create-bookmark", method = RequestMethod.POST)
  public void addBookMark(@RequestBody BookMark bookMark) {
    String title = urlService.titleExtractor(bookMark.getLink());
    bookMark.setTitle(title);
    bookMarkRepository.save(bookMark);
  }

  @RequestMapping(value ="/all-bookmarks",  method = RequestMethod.GET)
  public Iterable<BookMark> getBookMarks() {
      return bookMarkRepository.findAll();
  }

  @RequestMapping(value ="/all-bookmarks/{title}", method = RequestMethod.GET)
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
    bookMarkRepository.save(bookMark);
  }
}
