import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverURL"

// upload new video
export const uploadNewVideoAPI= async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allvideos`,video)
}

//get all videos
export const getAllVideoAPI= async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allvideos`,"")
}

//view single video
export const getAVideoAPI= async (id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allvideos/${id}`,"")
}

//remove video
export const removeVideoAPI= async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allvideos/${id}`,{})
}

//insert video to history
export const addVideoToHistoryAPI= async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

//get video from history
export const getHistoryAPI= async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//remove history
export const removeHistoryAPI= async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

//add category
export const addCategoryAPI=async(category)=>{
    return await commonAPI("POST",`${SERVER_URL}/category`,category)
}

//get category
export const getAllCategoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}
//remove category
export const removeCategoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/category/${id}`,{})
}

//update CAtegory
export const updateCategoryAPI=async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)
}