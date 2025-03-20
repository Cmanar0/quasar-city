import { log } from 'src/utils/log';
import { Ref } from 'vue';

export async function executeWithLoading(func : any, loadingRef : Ref<boolean>) {
  loadingRef.value = true;
  try {
    return await func();
  } finally {
    loadingRef.value = false;
  }
}

export function ServerException(error : any) {
  log.error(error, 'Server Error');
  return error;
}

export function toLink(link : string) {
  window.open(link, '_blank');
}
