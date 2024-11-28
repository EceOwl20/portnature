import User from "../models/user.js"

export const getirUsers = async (request, response, next) => {
    try {
        const users = await User.find();
        return response.status(201).json(users)
    } catch (error) {
        next(error)
    }
}

export const getirBir = async (request, response, next) => {
    try {
      const user = await User.findById(request.params.id);
      if (!user) {
        return response.status(404).json({ success: false, message: 'Kullanıcı bulunamadı' });
      }
      return response.status(200).json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  };
  

export const silUsers = async (request, response, next) => {
    try {
        const user = await User.findByIdAndDelete(request.params.id);
        response.status(201).json("Başarıyla Silindi");
    } catch (error) {
        next (error)
    }
}

export const guncelleUser = async (request, response, next) => {
    try {
      console.log('Gelen ID:', request.params.id); // Eklendi
      console.log('Gelen Veri:', request.body); // Eklendi
  
      const updateUser = await User.findByIdAndUpdate(
        request.params.id,
        {
          $set: {
            username: request.body.username,
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
          },
        },
        { new: true }
      );
  
      if (!updateUser) {
        return response.status(404).json({ success: false, message: 'Kullanıcı bulunamadı' });
      }
  
      response.status(200).json({ success: true, data: updateUser });
    } catch (error) {
      console.error('Güncelleme Hatası:', error); // Eklendi
      next(error);
    }
  };
  
