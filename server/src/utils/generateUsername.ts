export async function generateUniqueUsername(fullName: string): Promise<string> {
    // Step 1: Normalize
    let baseUsername = fullName.toLowerCase().replace(/\s+/g, '');
    let username = baseUsername;

    // Step 2: Check if it exists
    let counter = 1;
    while (true) {
      const existingUser = await this.prisma.auth.findUnique({
        where: { username },
      });

      if (!existingUser) {
        return username;
      }
      username = `${baseUsername}${counter}`;
      counter++;
    }
  }