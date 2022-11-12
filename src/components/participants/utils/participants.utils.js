export class ParticipantsUtils {
  static getParticipantsChunks (participants, chunkSize=10) {
    const chunks = [];
    for (let i = 0; i < participants.length; i += chunkSize) {
      const chunk = participants.slice(i, i + chunkSize);
      chunks.push(chunk);
    }
    
    return chunks;
  }
}
