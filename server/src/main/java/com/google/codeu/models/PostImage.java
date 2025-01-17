package com.google.codeu.models;

import com.google.appengine.api.datastore.Link;
import java.util.UUID;

/** Class representing an image in a post. */
public class PostImage {

  private UUID id;
  private UUID postId;
  private Link imageUrl;
  private String imageDescription;
  private long orderInPost;

  /**
   * Construct a new <code>PostImage</code> object with the image's URL, the post's ID and its
   * description. Its ID will be randomly generated by the server.
   *
   * @param postId The post's ID.
   * @param imageURL The image's URL.
   * @param imageDescription The image's description.
   * @param orderInPost The image's order in the post.
   */
  public PostImage(UUID postId, Link imageURL, String imageDescription, long orderInPost) {
    this(UUID.randomUUID(), postId, imageURL, imageDescription, orderInPost);
  }

  /**
   * Construct a new <code>PostImage</code> in full details.
   *
   * @param id The image's id.
   * @param postId The post's ID.
   * @param imageURL The image's URL.
   * @param imageDescription The image's description.
   * @param orderInPost The image's order in the post.
   */
  public PostImage(UUID id, UUID postId, Link imageURL, String imageDescription, long orderInPost) {
    this.id = id;
    this.postId = postId;
    this.imageUrl = imageURL;
    this.imageDescription = imageDescription;
    this.orderInPost = orderInPost;
  }

  public UUID getId() {
    return id;
  }

  public UUID getPostId() {
    return postId;
  }

  public Link getImageUrl() {
    return imageUrl;
  }

  public String getImageDescription() {
    return imageDescription;
  }

  public long getOrderInPost() {
    return orderInPost;
  }
}
