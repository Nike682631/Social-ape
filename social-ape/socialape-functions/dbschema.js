let db = {
  users: [
    {
      userId: "dh43hjdgkjsfnalfnsdlk",
      email: "user@gmail.com",
      handle: "user",
      createdAt: "2020-06-17T16:00:29.272Z",
      imageURL: "image/sdnvksnaslcnf/ndslacnfe",
      bio: "Hello, my name is user",
      website: "https://user.com",
      location: "Delhi,IN",
    },
  ],

  screams: [
    {
      userHandle: user,
      body: "this is the scream body",
      createdAt: "2020-06-17T16:00:29.272Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "affeifefsasaanfefij",
      body: "nice on mate!",
      createdAt: "2020-06-17T16:00:29.272Z",
    },
  ],
  notifications: [
    {
      recipent: "user",
      sender: "another user",
      read: "true | false",
      screamId: "ndsfnjdsnfsnlnndkvn",
      type: "like | comment",
      createdAt: "2020-06-17T16:00:29.272Z",
    },
  ],
};

const userDetails = {
  // Redux Data
  credentials: {
    userId: "dh43hjdgkjsfnalfnsdlk",
    email: "user@gmail.com",
    handle: "user",
    createdAt: "2020-06-17T16:00:29.272Z",
    imageURL: "image/sdnvksnaslcnf/ndslacnfe",
    bio: "Hello, my name is user",
    website: "https://user.com",
    location: "Delhi,IN",
  },
  likes: [
    {
      userHandle: "user",
      screamId: "nsikenfidksifkthcsjf",
    },
    {
      userHandle: "user",
      screamId: "enfiachasjiafiohcsjf",
    },
  ],
};
