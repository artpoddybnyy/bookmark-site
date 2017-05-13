package com.artp.services;

import org.jsoup.HttpStatusException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.SocketTimeoutException;
import java.net.UnknownHostException;

@Service
public class UrlService {

//  public static void main(String[] args) {
//    String s = titleExtractor("https://vk.com/warmilk123");
//    System.out.println(s);
//  }

  public String titleExtractor(String url) {
    Document doc;
    String title = null;
    try {

      doc = Jsoup.connect(url).timeout(6000).
        validateTLSCertificates(false).get();
      title = doc.title();

    } catch ( UnknownHostException | HttpStatusException | SocketTimeoutException e ) {
      return "404";
    } catch (IOException e) {
      return url;
    }
    return title;
  }
}
