const AssetsAPI = {
  assets: [
    {
      id: 11,
      name: "10 Principles of Change Management",
      type: "Article",
      duration: "0.11",
      durationType: "min"
    },
    {
      id: 12,
      name: "Overview of change management phases",
      type: "Video",
      duration: "0.06"
    },
    {
      id: 13,
      name: "Blockchain for dummies",
      type: "Document",
      duration: "0.15"
    },
    {
      id: 14,
      name: "10 Principles of Change Management",
      type: "Online Course",
      duration: "0.02"
    },

    {
      id: 15,
      name: "It's ok I'm only busy for a while",
      type: "Video",
      duration: "0.11",
      durationType: "min"
    },
    {
      id: 16,
      name:
        "Why Carving Out 5 Hours Every Day For Difficult Work Can Lead To Greatness",
      type: "Document",
      duration: "0.09",
      durationType: "min"
    },
    {
      id: 17,
      name: "Multi-tasking: you're making yourself slower and dumber",
      type: "Document",
      duration: "0.21",
      durationType: "min"
    },
    {
      id: 18,
      name: "Overview of change management phases",
      type: "Video",
      duration: "0.06",
      durationType: "min"
    }
  ],
  all: function() {
    return this.assets;
  },
  get: function(id) {
    const isAssets = a => a.id === id;
    return this.assets.find(isAssets);
  }
};

export default AssetsAPI;
