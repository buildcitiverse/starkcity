// get truncated hash
export const getTruncateHash = (hash: string, length: number = 6, lengthEnd: number = 6, truncateEnd?:boolean) => {
    if (!hash) {
      return "";
    }
    if(truncateEnd){
      return `${hash.slice(0, length)}...`;
    }
  
    return `${hash.slice(0, length)}...${hash.slice(-lengthEnd)}`;
  };
  