package com.artp.services;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Service;
import java.io.IOException;

@Service
public class UrlService {

  public String titleExtractor(String url) {
    Document doc;
    String title = null;
    try {
      doc = Jsoup.connect(url).get();
      title = doc.title();
    } catch (IOException e) {
      e.printStackTrace();
    }
    return title;
  }
}
