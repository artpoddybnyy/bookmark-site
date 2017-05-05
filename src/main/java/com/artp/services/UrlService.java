package com.artp.services;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.UnknownHostException;

@Service
public class UrlService {

//  public static void main(String[] args) {
//    String s = titleExtractor("https://vk.com/warmilk");
//    System.out.println(s);
//  }
  public String titleExtractor(String url) {
    Document doc;
    String title = null;
    try {
      doc = Jsoup.connect(url).timeout(6000).
        validateTLSCertificates(false).
//        userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36")
      get();
      title = doc.title();
    } catch (UnknownHostException e) {
//      e.printStackTrace();
    return "404";

    } catch (IOException e) {
     return "oops cant get title";
    }
    return title;
  }
}
