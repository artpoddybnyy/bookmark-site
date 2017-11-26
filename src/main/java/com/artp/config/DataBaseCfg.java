package com.artp.config;

import org.apache.commons.dbcp.BasicDataSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.net.URI;
import java.net.URISyntaxException;

@Configuration
public class DataBaseCfg {

  private static final Logger logger = LoggerFactory.getLogger(DataBaseCfg.class);


  @Bean
  public BasicDataSource dataSource() throws URISyntaxException {


//    URI dbUri = new URI(System.getenv("DATABASE_URL"+"?sslmode=require"));
    String url = "postgres://iovpbgorhwuusz:73d918ef219e531a701427cc6a755c8fe65ae9f82eef96569e0cffdad80c11ba@ec2-54-75-237-110.eu-west-1.compute.amazonaws.com:5432/da08l8c5t5f1cv";

    String username = "iovpbgorhwuusz";
    String password = "73d918ef219e531a701427cc6a755c8fe65ae9f82eef96569e0cffdad80c11ba";

    URI dbUri = new URI(url);

//    String username = dbUri.getUserInfo().split(":")[0];
//    String password = dbUri.getUserInfo().split(":")[1];


    String dbUrl = "jdbc:postgresql://" + dbUri.getHost() + dbUri.getPath() + ":" + dbUri.getPort() + dbUri.getPath()+"?sslmode=require";

    logger.info(dbUrl+"111111111111111111111111");

    BasicDataSource basicDataSource = new BasicDataSource();
    basicDataSource.setUrl("jdbc:postgresql://ec2-54-75-237-110.eu-west-1.compute.amazonaws.com:5432/da08l8c5t5f1cv?sslmode=require");
    basicDataSource.setUsername(username);
    basicDataSource.setPassword(password);

    return basicDataSource;
  }
}
