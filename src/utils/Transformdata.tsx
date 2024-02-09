const transformData = (datauserone) => {
  
    const mapping = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité"
    };
  
    const updatedData = datauserone.data.map(item => ({
      value: item.value,
      kind: mapping[item.kind] || item.kind
    }));
  
    const data = updatedData.map(item => ({
      subject: item.kind,
      A: item.value,
      fullMark: 150,
    }));
  
    return data;
  };
  
  export default transformData;
  